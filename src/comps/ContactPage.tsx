import { useEffect, useState } from "react";

export default function ContactPage(){
    const [isSent, setIsSent] = useState<boolean>(false);
    const [initialTime, setInitialTime] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        formData.append("access_key", "c23fef32-fa1b-4111-8390-e5ede20cf83e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setIsSent(true);
            setInitialTime(4);
            setEmail('');
            setMessage('');
            // e.currentTarget.reset();
        } else {
            setIsSent(false);
            setInitialTime(4);
            console.log("Error", data);
        }
    };

    useEffect(() => {
        if (initialTime > 0){
            const timer = setTimeout(() => {
                setInitialTime(prev => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else{
            setInitialTime(0);
        }
    }, [initialTime])

    return(
        <section id="contact" className="w-full max-w-[400px] mx-auto">
            <p className="text-2xl text-center text-[#f8f8f8]">Contact me!</p>

            <form 
                className="flex flex-col gap-3 mt-4"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input 
                    className="outline-none border-2 border-[rgba(159,158,158,0.2)] pl-2 py-1 rounded text-[#f8f8f8] text-sm" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                    value={email}
                    placeholder="Email Address"
                    type="email"
                    autoComplete="off"
                    id="email"
                    name="email"
                    required
                ></input>
                <textarea
                    className="outline-none border-2 border-[rgba(159,158,158,0.2)] pl-2 py-1 rounded text-[#f8f8f8] text-sm resize-none"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)}
                    value={message}
                    placeholder="Message"
                    rows={5}
                    id="message"
                    name="message"
                    required
                ></textarea>
                <button
                    className="p-1 border-2 border-[#5dd62c] hover:bg-[rgba(93,214,44,0.4)] outline-none transition-colors duration-300 rounded-lg text-white cursor-pointer"
                    type="submit"
                >
                    Send
                </button>
            </form>

            <div className={`fixed bg-black w-[80%] max-w-[400px] p-2 top-8 left-1/2 ${!initialTime && '-translate-y-[200%]'} -translate-x-1/2 transition-transform duration-700`}>
                <div className={`absolute top-0 left-0 h-1 ${initialTime && 'timer-animation'} ${isSent ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <p className="text-white mt-1">
                    {isSent ? 'Message has been sent' : 'Message cant be sent'}
                </p>
            </div>
        </section>
    )
}