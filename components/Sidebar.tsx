import { RiHomeOfficeFill } from "react-icons/ri";


const Sidebar = () => {
    return (
        <section className='sticky left-0 top-0 flex h-screen w-fit flex-col
    justify-between p-6 pt-28 bg-primary text-white max-sm:hidden lg:w-[264px]'>
            <div className='flex flex- flex-col gap-6'>
                <div className='flex items-center gap-4'>
                    <RiHomeOfficeFill />
                    <a href='/' className='text-lg font-bold'>
                        Home</a>
                </div>
                <div className='flex items-center gap-4'>
                    <a href='/upcoming' className='text-lg font-bold'>Upcoming</a>
                </div>
                <div className='flex items-center gap-4'>

                    <a href='/previous' className='text-lg font-bold'>Previous</a>
                </div>
                <div className='flex items-center gap-4'>

                    <a href='/recordings' className='text-lg font-bold'>Recordings</a>
                </div>
                <div className='flex items-center gap-4'>
                    <a href='/personal-room' className='text-lg font-bold'>Personal Room</a>
                </div>
            </div>
        </section>
    )
}

export default Sidebar