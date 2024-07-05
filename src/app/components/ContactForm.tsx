'use client'
import React, { FormEvent, useState } from 'react'

interface Payload {
  name: string
  email: string
  message: string
}

interface Status {
  success: undefined | boolean;
  message: string;
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({
    success: true,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const setSuccess = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus({
      success: true,
      message: 'Sua mensagem foi enviada.',
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const body = {
      name,
      email,
      message,
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(body) 
      }
    );

    console.log(response.status)
    if (response.status == 200) {
      setSuccess()
    } else {
      setStatus({
        success: false,
        message: 'Um erro ocorreu.',
      });
    }

    setIsLoading(false);
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-[2rem] flex flex-col border-b-2 border-beige ">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
         placeholder="SEU NOME" name="name" className="placeholder:text-beige placeholder:italic outline-none bg-transparent pb-[1rem] pl-[0.5rem] w-full md:w-[26.25rem]"/>
      </div>
      <div className="mb-[2rem] flex flex-col border-b-2 border-beige ">
        <input
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         placeholder="SEU EMAIL" name="email" className="placeholder:text-beige placeholder:italic outline-none bg-transparent pb-[1rem] pl-[0.5rem] w-[26.25rem]"/>
      </div>
      <div className="mb-[3.5rem] flex flex-col border-b-2 border-beige ">
        <textarea  
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="SUA MENSAGEM" rows={5} name="message" className="max-h-[8rem] min-h-[4rem] placeholder:text-beige placeholder:italic outline-none bg-transparent pb-[1rem] pl-[0.5rem] w-[26.25rem]"/>
      </div>
      <button type='submit' className="font-bold uppercase text-beige" >
        {
          isLoading ? "Enviando" : "Enviar"
        }
      </button>
      {status && (
        <div>
          {status.message}
        </div>
      )}
    </form>
  )
}

export default ContactForm