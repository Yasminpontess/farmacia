function Home() {
  return (
    <>
      <div className="bg-blue-300 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindos!</h2>
            <p className="text-xl">
              Aqui na Farmacia Bem Estar você encontra tudo para ficar BEM !!!
            </p>

            <div className="flex justify-around gap-4">
              <div
                className="rounded text-white 
                                              border-white border-solid border-2 py-2 px-4"
              >
                Categorias
              </div>
            </div>
          </div>

          <div className="flex">
            <img
              src="src/assets/famarcia-hospitalar.jpg"
              alt="Imagem Página Home"
              className="w-full h-auto object-left"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
