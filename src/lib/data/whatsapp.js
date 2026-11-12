export const WHATSAPP_NUMBER = '6285753421213';
export const WHATSAPP_DISPLAY = '0857-5342-1213';

export function whatsappUrl(message) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
