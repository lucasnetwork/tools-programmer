
function DefaultLayout(props) {
 
  return (
    <div class="flex h-full w-full">
      <aside class="w-full max-w-48 flex flex-col h-full   ">
        <div class="bg-darkII p-4">
            <p class="text-white">Ferramentas</p>
        </div>
        <div class="bg-darkI flex-1">
        <button class="text-white">Cpf</button>

        </div>
      </aside>
      <div class="flex-1 flex items-center flex-col gap-y-4 self-stretch  ">
     <div class="w-full max-w-screen-xl flex flex-col  flex-1">
     {props.children}
     </div>

      </div>
    </div>
  );
}

export default DefaultLayout;
