import { useState, useEffect, useCallback } from "react";

interface Message {
  sender: "client" | "agent";
  text: string;
}

const MESSAGES: Message[] = [
  { sender: "client", text: "Olá, quero saber mais sobre o plano premium" },
  { sender: "agent", text: "Olá! Sou a IA da Climb Up 😊 Vou te ajudar!" },
  { sender: "agent", text: "Qual o segmento da sua empresa?" },
  { sender: "client", text: "Trabalhamos com e-commerce de moda" },
  { sender: "agent", text: "Perfeito! Já cadastrei seus dados no CRM ✅" },
  { sender: "agent", text: "Agendei uma reunião com nosso especialista para amanhã às 14h. Tudo certo?" },
  { sender: "client", text: "Ótimo, obrigado!" },
  { sender: "agent", text: "Enviei o link de confirmação 🔗 Qualquer dúvida, estou aqui 24/7!" },
];

const TYPING_DELAY = 1200;
const MESSAGE_DELAY = 800;
const RESTART_DELAY = 3000;

const WhatsAppChat = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<"client" | "agent">("agent");

  const showNextMessage = useCallback(() => {
    setVisibleMessages((prev) => {
      const next = prev + 1;
      if (next > MESSAGES.length) return prev;
      return next;
    });
    setIsTyping(false);
  }, []);

  useEffect(() => {
    if (visibleMessages >= MESSAGES.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(0);
        setIsTyping(false);
      }, RESTART_DELAY);
      return () => clearTimeout(timer);
    }

    const nextMessage = MESSAGES[visibleMessages];
    setTypingSender(nextMessage.sender);
    setIsTyping(true);

    const timer = setTimeout(() => {
      showNextMessage();
    }, TYPING_DELAY);

    return () => clearTimeout(timer);
  }, [visibleMessages, showNextMessage]);

  return (
    <div className="w-full max-w-xs lg:max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[6px] border-orange-500 bg-orange-500 shadow-xl overflow-hidden aspect-[9/19] flex flex-col">
        {/* Notch */}
        <div className="bg-orange-500 flex justify-center pt-2 pb-1">
          <div className="w-20 h-5 bg-black rounded-full" />
        </div>
        {/* Status bar */}
        <div className="bg-orange-500 text-white text-[10px] flex justify-between items-center px-4 py-1">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3.5 h-2 border border-white rounded-sm relative">
              <div className="absolute inset-[1px] right-[2px] bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "#075E54" }}>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
            AI
          </div>
          <div className="text-white">
            <p className="text-sm font-semibold leading-tight">Agente Climb Up</p>
            <p className="text-[10px] opacity-80">online</p>
          </div>
        </div>

        {/* Chat area */}
        <div
          className="px-3 py-3 space-y-2 min-h-[320px] max-h-[380px] overflow-y-auto flex flex-col"
          style={{ backgroundColor: "#ECE5DD" }}
        >
          {MESSAGES.slice(0, visibleMessages).map((msg, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-3 py-1.5 rounded-lg text-sm shadow-sm transition-all duration-300 ${
                msg.sender === "agent"
                  ? "self-end rounded-tr-none"
                  : "self-start rounded-tl-none"
              }`}
              style={{
                backgroundColor: msg.sender === "agent" ? "#DCF8C6" : "#FFFFFF",
                animation: "whatsapp-fade-in 0.3s ease-out",
              }}
            >
              <p className="text-gray-800 text-[13px] leading-snug">{msg.text}</p>
            </div>
          ))}

          {isTyping && (
            <div
              className={`max-w-[80%] px-3 py-2 rounded-lg text-sm shadow-sm ${
                typingSender === "agent"
                  ? "self-end rounded-tr-none"
                  : "self-start rounded-tl-none"
              }`}
              style={{
                backgroundColor: typingSender === "agent" ? "#DCF8C6" : "#FFFFFF",
              }}
            >
              <div className="flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "#F0F0F0" }}>
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-gray-400">
            Mensagem
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#075E54" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes whatsapp-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppChat;
