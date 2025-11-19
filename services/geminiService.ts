
import { GoogleGenAI } from "@google/genai";
import { PROFILE_BIO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE, PUBLICATIONS } from '../constants';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct the system instruction based on the portfolio data (Using English for AI context)
const buildSystemInstruction = (): string => {
  const projectDetails = PROJECTS.map(p => `- ${p.title}: ${p.description.en} (Tech: ${p.technologies.join(', ')})`).join('\n');
  const skillsDetails = SKILL_CATEGORIES.map(cat => `- ${cat.name.en}: ${cat.skills.join(', ')}`).join('\n');
  const experienceDetails = EXPERIENCE.map(exp => `- ${exp.period}: ${exp.role.en} at ${exp.company.en} (${exp.location?.en}). ${exp.description.en}`).join('\n');
  const publicationDetails = PUBLICATIONS.map(pub => {
    if (pub.type === 'Book') {
        return `- BOOK: ${pub.title}. ${pub.description?.en}`;
    }
    return `- ${pub.type.toUpperCase()}: ${pub.title} (${pub.year}). Presented at ${pub.event.en}.`;
  }).join('\n');

  return `
    You are an AI assistant for Pablo Torrado's academic and developer portfolio.
    Pablo is a Lecturer at the University of Hong Kong (HKU) and an educational game developer specializing in Spanish (ELE).
    
    Your goal is to professionally and enthusiastically answer questions about Pablo's academic background, teaching experience, game development projects, and publications.

    Here is the context about Pablo:
    
    BIO:
    ${PROFILE_BIO.en}

    EXPERIENCE (Chronological):
    ${experienceDetails}

    PUBLICATIONS, BOOKS & TALKS:
    ${publicationDetails}

    SKILLS:
    ${skillsDetails}

    PROJECTS (Educational Games):
    ${projectDetails}

    Guidelines:
    - Be helpful, academic yet accessible, and professional.
    - Highlight his unique blend of linguistics and technology (gamification).
    - If asked about his games, mention they are designed for Spanish learning.
    - Speak as a helpful assistant representing Pablo.
  `;
};

// Fix: Update parts type definition from tuple to array to match the inferred type from the caller
export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
        return "I'm sorry, I can't connect to the brain right now. Please check the API key configuration.";
    }

    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history, // Include previous context
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: buildSystemInstruction(),
        temperature: 0.7,
      }
    });

    return response.text || "I'm speechless right now. Please try again.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};
