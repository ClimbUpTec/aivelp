import { useState, useEffect, useCallback, useRef } from "react";

interface Message {
  sender: "client" | "agent";
  text: string;
  agentName?: string;
}

const MESSAGES: Message[] = [
  { sender: "client", text: "Oi" },
  { sender: "agent", text: "Olá! Tudo bem?", agentName: "Gabriela (IA)" },
  { sender: "agent", text: "Você precisa de ajuda com cotação de seguro ou com alguma apólice ou sinistro?", agentName: "Gabriela (IA)" },
  { sender: "client", text: "sinistro" },
  { sender: "agent", text: "Entendi! Vou te direcionar agora pra especialista de sinistros que vai te ajudar, tudo bem?", agentName: "Gabriela (IA)" },
  { sender: "client", text: "Tá bom" },
  { sender: "agent", text: "Oi! Eu sou a Nina, do time de sinistros.\nVou te ajudar por aqui, tá?", agentName: "Nina (IA)" },
  { sender: "agent", text: "Encontrei um cadastro aqui no nome de Alice.\nPode me confirmar seu nome completo pra eu buscar sua apólice?", agentName: "Nina (IA)" },
  { sender: "client", text: "Alice Ferreira Ortiz" },
  { sender: "agent", text: "Perfeito.", agentName: "Nina (IA)" },
  { sender: "agent", text: "Alice, pra eu te enviar os detalhes da sua apólice, pode me confirmar seu CPF ou CNPJ?", agentName: "Nina (IA)" },
  { sender: "client", text: "12345678910" },
  { sender: "agent", text: "Perfeito, Alice! Já localizei sua apólice aqui 👇\n\n✅ Segurado: Alice Ferreira Ortiz\n🚗 Veículo: HB20 (Placa BRA2E25)\n🏢 Seguradora: Bradesco\n📅 Vigência: até 04/04/2027\n💰 Franquia: R$ 2.000\n📞 Assistência 24h: 0800 12345", agentName: "Nina (IA)" },
  { sender: "agent", text: "Me conta qual foi o sinistro?", agentName: "Nina (IA)" },
  { sender: "client", text: "eu bati o carro" },
  { sender: "agent", text: "Poxa, sinto muito por isso, Alice…\nMas fica tranquila que eu vou te ajudar agora, tá?", agentName: "Nina (IA)" },
  { sender: "agent", text: "Se puder, me envia fotos do acidente? Isso já agiliza bastante o atendimento.", agentName: "Nina (IA)" },
  { sender: "client", text: "meu marido que tem" },
  { sender: "agent", text: "Sem problema.\nVocê pode me contar rapidamente o que aconteceu? Se preferir, pode enviar um áudio.", agentName: "Nina (IA)" },
  { sender: "client", text: "Bati em outro carro no estacionamento do shopping." },
  { sender: "agent", text: "Obrigada por me explicar.", agentName: "Nina (IA)" },
  { sender: "agent", text: "Você consegue me informar o endereço onde aconteceu?", agentName: "Nina (IA)" },
  { sender: "client", text: "Av Assis Brasil 123" },
  { sender: "agent", text: "Perfeito.\nVocê chegou a fazer o Boletim de Ocorrência?", agentName: "Nina (IA)" },
  { sender: "client", text: "sim" },
  { sender: "agent", text: "Ótimo.\nVocê tem o contato da outra pessoa envolvida?", agentName: "Nina (IA)" },
  { sender: "client", text: "tenho 51 123456789" },
  { sender: "agent", text: "Perfeito. E só pra confirmar: teve alguma vítima no acidente?", agentName: "Nina (IA)" },
  { sender: "client", text: "não" },
  { sender: "agent", text: "Que bom.", agentName: "Nina (IA)" },
  { sender: "agent", text: "Alice, já coletei todas as informações iniciais aqui.\nVou encaminhar seu atendimento agora pra nossa equipe dar continuidade e te orientar nos próximos passos, tudo bem?", agentName: "Nina (IA)" },
  { sender: "client", text: "Ok" },
  { sender: "agent", text: "Perfeito.\nJá deixei tudo registrado e encaminhado aqui internamente.", agentName: "Nina (IA)" },
  { sender: "agent", text: "Nossa equipe vai iniciar o processo de sinistro e seguir com você pra resolver o seu caso o mais rápido possível.\nEm breve, um corretor vai entrar em contato por ligação com você.", agentName: "Nina (IA)" },
  { sender: "agent", text: "Se precisar de qualquer coisa nesse meio tempo, é só me chamar por aqui, combinado?", agentName: "Nina (IA)" },
];

const TYPING_DELAY = 900;
const RESTART_DELAY = 3000;

const WhatsAppChat = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<"client" | "agent">("agent");
  const chatRef = useRef<HTMLDivElement>(null);

  const showNextMessage = useCallback(() => {
    setVisibleMessages((prev) => {
      const next = prev + 1;
      if (next > MESSAGES.length) return prev;
      return next;
    });
    setIsTyping(false);
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

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
    <div className="w-full max-w-[205px] lg:max-w-[246px] mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[6px] border-orange-200 bg-orange-200 shadow-xl overflow-hidden aspect-[9/19] flex flex-col">
        {/* Notch */}
        <div className="bg-orange-200 flex justify-center pt-2 pb-1">
          <div className="w-20 h-5 bg-orange-300 rounded-full" />
        </div>
        {/* Status bar */}
        <div className="bg-orange-200 text-gray-700 text-[10px] flex justify-between items-center px-4 py-1">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3.5 h-2 border border-gray-700 rounded-sm relative">
              <div className="absolute inset-[1px] right-[2px] bg-gray-700 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: "#075E54" }}>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
            CS
          </div>
          <div className="text-white">
            <p className="text-sm font-semibold leading-tight">Climb Up Seguros</p>
            <p className="text-[10px] opacity-80">online</p>
          </div>
        </div>

        {/* Chat area */}
        <div
          ref={chatRef}
          className="px-3 py-3 space-y-2 flex-1 overflow-y-auto flex flex-col"
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
              {msg.agentName && (
                <p className="text-[10px] font-bold text-green-700">{msg.agentName}</p>
              )}
              <p className="text-gray-800 text-[13px] leading-snug whitespace-pre-line">{msg.text}</p>
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
