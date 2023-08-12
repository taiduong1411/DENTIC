function BookingNow() {
    return (
        <div className="grid grid-cols-2 m-auto  max-[1200px]:grid-cols-1" style={{ width: '95%' }}>
            <div className="max-[1200px]: w-full">
                <img src="https://img.freepik.com/free-photo/asian-patient-sitting-with-open-mouth-holding-mirror-dentist-checking-her-teeth_1098-20316.jpg?w=826&t=st=1691747408~exp=1691748008~hmac=d004bf443d45881e21e0107571337dc2a81cbedbb9fdb67686a13ce5bb169f2c" alt="" />
                {/* <h1>a</h1> */}
            </div>
            <div>
                <div className="h-full shadow-2xl max-[1200px]:w-full max-[1200px]:mr-6 max-[1200px]:mt-10">
                    <div className="p-7" style={{ marginTop: 'auto' }}>
                        <p className="text-center text-2xl font-bold">BOOKING NOW</p>
                        <form>
                            <div class="grid gap-6 mb-4 max-[1200px]:mb-0 md:grid-cols-2">
                                <div>
                                    <label for="first_name" class="block max-[1200px]:mb-0  mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                                </div>
                                <div>
                                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                    <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Flowbite" required />
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>

                            </div>
                            <div class="mb-4">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
                            </div>

                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </div>
                    <section className="p-5 divide-y rounded divide-slate-200">
                        <details class="p-3 group" open>
                            <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none group-hover:text-slate-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-emerald-500  shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac05 desc-ac05">
                                    <title id="title-ac05">Leading icon</title>
                                    <desc id="desc-ac05">Icon that describes the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
                                </svg>
                                What browsers are supported?
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac06 desc-ac06">
                                    <title id="title-ac06">Open icon</title>
                                    <desc id="desc-ac06">icon that represents the state of the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </summary>
                            <p class="mt-4 text-slate-500">
                                The components in Wind UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge.
                            </p>
                        </details>
                        <details class="p-4 group">
                            <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none group-hover:text-slate-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-emerald-500  shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac07 desc-ac07">
                                    <title id="title-ac07">Leading icon</title>
                                    <desc id="desc-ac07">Icon that describes the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                </svg>
                                Are the components only available in green?
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac08 desc-ac08">
                                    <title id="title-ac08">Open icon</title>
                                    <desc id="desc-ac08">icon that represents the state of the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </summary>
                            <p class="mt-4 text-slate-500">
                                All components are easily customizable to match your own project.
                            </p>
                        </details>
                        <details class="p-4 group">
                            <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none group-hover:text-slate-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-emerald-500  shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac09 desc-ac09">
                                    <title id="title-ac09">Leading icon</title>
                                    <desc id="desc-ac09">Icon that describes the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>
                                Is WindUi open source?
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac10 desc-ac10">
                                    <title id="title-ac10">Open icon</title>
                                    <desc id="desc-ac10">icon that represents the state of the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </summary>
                            <p class="mt-4 text-slate-500">
                                WindUI is not an open source project yet, but we don't guarantee that it won't become in the future.
                            </p>
                        </details>
                        <details class="p-4 group">
                            <summary class="[&::-webkit-details-marker]:hidden relative flex gap-4 pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none group-hover:text-slate-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-emerald-500  shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac11 desc-ac11">
                                    <title id="title-ac11">Leading icon</title>
                                    <desc id="desc-ac11">Icon that describes the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                How can I help improve WindUI?
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 w-4 h-4 transition duration-300 top-1 stroke-slate-700 shrink-0 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title-ac12 desc-ac12">
                                    <title id="title-ac12">Open icon</title>
                                    <desc id="desc-ac12">icon that represents the state of the summary</desc>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </summary>
                            <p class="mt-4 text-slate-500">
                                You can can help our team improve WindUI by giving us feedback on our discord channel.
                            </p>
                        </details>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default BookingNow;