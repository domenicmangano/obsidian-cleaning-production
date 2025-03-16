import sanitizeHtml from "sanitize-html";
import {emailRegex, phoneRegex} from "./RegexTest.ts";

const allowedTags = ['b', 'i', 'strong', 'em']; // Allow only essential formatting
const allowedAttributes = { }; // Disallow all attributes

export const useSanitizeInput = (input: string) => {
    const cleaned = sanitizeHtml(input, {
        allowedTags,
        allowedAttributes,
        disallowedTagsMode: 'escape',
        enforceHtmlBoundary: true, // Helps prevent inserting scripts via tag trickery
        parser: {
            lowerCaseTags: true
        }
    });

    // Further escape quotes to prevent attribute injection
    return cleaned
        .replace(/"/gm, '&quot;')
        .replace(/'/gm, '&#39;');
};

export const useSanitizeEmail = (input: string) => {
    const initialClean = useSanitizeInput(input);
    return emailRegex.test(initialClean) && !initialClean.includes("&#");
};
export const useSanitizePhone = (input: string) => {
    const initialClean = useSanitizeInput(input);
    return phoneRegex.test(initialClean) && !initialClean.includes("&#");
};
