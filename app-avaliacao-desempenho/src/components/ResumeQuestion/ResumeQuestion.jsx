export default function ResumeQuestion({titleResumeQuestion = "title"}){
    return (
        <div className=" w-48 flex flex-col border-2 border-gray-400 rounded p-4 ">
                        <h2 className="text-center">{titleResumeQuestion}</h2>
                        <div>
                            <p><span>1.1</span><span></span></p>     
                            <p><span>1.2</span><span></span></p>
                            <p><span>1.3</span><span></span></p>  
                            <p><span>1.4</span><span></span></p>  
                            <p><span>1.5</span><span></span></p>
                            <>Total: <span>100</span></>
                        </div>
                    </div>
    )
}