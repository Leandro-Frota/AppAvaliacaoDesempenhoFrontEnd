'use client';

import Login from '@/components/Login/Login';

export default function Home() {
  return (
    <div className="flex flex-row w-screen min-h-screen">
      <div className="flex w-full items-center justify-center bg-blue-100">
        <div className="bg-white p-10 rounded-2xl shadow-lg h-min w-96 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Bem-vindo!</h2>
            <p className="text-gray-700 text-lg">
              Acesse sua conta para continuar ao painel administrativo.
            </p>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-screen bg-gray-100'>     
        <Login />
      </div>      
    </div>
  );
}
