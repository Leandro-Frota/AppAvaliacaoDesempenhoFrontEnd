'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login(){
    const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [erro, setErro] = useState('');
   const router = useRouter();
 
   const handleLogin = async (e) => {
     e.preventDefault();
 
     // Simulação de login (substituir por chamada real à API)
     if (email === 'admin@email.com' && senha === '123456') {
       router.push('/about'); // Redireciona após login
     } else {
       setErro('Credenciais inválidas');
     }
   };
 
   return (
     <div className="flex items-center justify-center min-w-full min-h-screen  bg-gray-100">
       <form
         onSubmit={handleLogin}
         className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
       >
         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
 
         {erro && (
           <p className="text-red-600 text-sm mb-4 text-center">{erro}</p>
         )}
 
         <label className="block mb-2 text-sm font-medium text-gray-700">
           Email
         </label>
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="w-full p-2 border border-gray-300 rounded-lg mb-4"
           required
         />
 
         <label className="block mb-2 text-sm font-medium text-gray-700">
           Senha
         </label>
         <input
           type="password"
           value={senha}
           onChange={(e) => setSenha(e.target.value)}
           className="w-full p-2 border border-gray-300 rounded-lg mb-6"
           required
         />
 
         <button
           type="submit"
           className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
         >
           Entrar
         </button>
         <button className='cursor-pointer active:to-blue-700 focus:to-blue-700  mt-1 font-light '>Recuperar senha</button>
       </form>
       
     </div>
   );    
}