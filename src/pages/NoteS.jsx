export default function NoteS() {
    return (
        <>
            <div className='mx'>
                <div className="App w-[100%] flex flex-col items-center">
                    <h1 className='judul'> Notes </h1>
                    <div className="flex flex-col gap-3 w-[500px] ">
                        <input type="text" placeholder="Title" className="input" />
                        <textarea name="" id="" cols="30" rows="10" className="textarea"></textarea>
                    </div>
                    <div className='flex flex-row flex-wrap justify-center'>
                    </div>
                </div>
            </div>

        </>
    )
}