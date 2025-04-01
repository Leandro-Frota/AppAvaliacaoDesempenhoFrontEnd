import Item from "@/components/Item/Item"
import ResumeQuestion from "@/components/ResumeQuestion/ResumeQuestion"

export  default function ResumePontuation(){
    return (
        <div className='w-full h-full flex flex-col gap-2 p-10'>
            <h1 className="font-bold text-2xl">Resumo da pontuação</h1>
            <div className="">
                <div className="flex flex-wrap gap-4 justify-center min-w-full min-h-full ">
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