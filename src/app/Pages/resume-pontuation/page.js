'use client'
import Item from "@/components/Item/Item"
import ResumeQuestion from "@/components/ResumeQuestion/ResumeQuestion"
import InputLabel from "@/components/InputLabel/InputLabel"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

//logic to look the data in the database

export  default function ResumePontuation(){

    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h1 className="font-bold text-2xl">Resumo da pontuação</h1>
            <InputLabel name='buscar'
                                    label=''
                                    type='text'
                                    className="border-2 border-gray-300 rounded outline-2px-solid p-1 w-100"
                                    placeholder="Buscar"
                        />          

            <div className="">
                <div className="flex flex-col gap-4 justify-center min-w-full min-h-full ">
                    <ResumeQuestion titleResumeQuestion="Quesito 1"/>
                    <ResumeQuestion titleResumeQuestion="Quesito 2"/>
                    <ResumeQuestion titleResumeQuestion="Quesito 3"/>
                    <ResumeQuestion titleResumeQuestion="Quesito 4"/>
                    <ResumeQuestion titleResumeQuestion="Quesito 5"/>
                    <ResumeQuestion titleResumeQuestion="Quesito 6"/>
                </div>
            </div>                                      
        </div>
    )
}