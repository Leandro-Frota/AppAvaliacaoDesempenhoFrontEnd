import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";

export default function DeleteRegisterEmployeeModal ({ employeeIdDeleteData, setIsOpen, deleteEmployeeById }){

    const handleDelete = () => {
        deleteEmployeeById(employeeIdDeleteData._id);
        setIsOpen(false);       
    };
    return (
        <div className="flex flex-col absolute inset-0 z-100 items-center justify-center min-h-screen bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl text-center font-semibold mb-4">Deletar Funcionário</h2>
                <form onSubmit={handleDelete} className="flex flex-col gap-4">
                    <p className="text-sm text-gray-500 mb-1">Tem certeza que deseja deletar este funcionário?</p>
                    <div className="mb-1">
                        < div className="mb-1">
                            <ul className="text-red-500 text-sm list-disc pl-5">
                                <li>Esta ação é irreversível!</li>
                                <li>Todos os dados relacionados a este funcionário serão perdidos.</li>
                                <li>Por favor, confirme se deseja continuar.</li>
                            </ul>
                            <div className="text-black-500 mt-2">
                                <p className="text-center mb-1">Funcionário a ser deletado:</p>
                                <p><span className="font-bold">Nome:</span> {employeeIdDeleteData.name}</p>
                                <p><spna className="font-bold">Matrícula: </spna>{employeeIdDeleteData.registration}</p>
                                <p><span className="font-bold">Cargo:</span> {employeeIdDeleteData.office}</p>
                                <p><span className="font-bold">Gerência: </span>{employeeIdDeleteData.management}</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <ButtonSubmit text='Deletar'  type='submit' onClick={handleDelete}/>         
                        <button className="hover:text-red-700" onClick={()=>setIsOpen(false)}>Cancelar</button>
                    </div>
                </form>                
            </div>
        </div>
    );
}