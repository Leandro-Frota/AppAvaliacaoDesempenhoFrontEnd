export default function ModalIsLoading({IsLoading, message="Carregando..."}) {
    if(!IsLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-blue-700 text-lg font-medium">{message}</p>
          </div>
        </div>
      );
}