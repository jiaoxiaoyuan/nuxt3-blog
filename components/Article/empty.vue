<template>
    <article
        class="m-2 overflow-hidden border shadow-lg group rounded-2xl text-zinc-700"
    >
        <NuxtLink to="/">
            <div
                class="lg:h-48 md:h-36 w-full object-cover object-center group-hover:scale-[1.05] transition-all duration-500"
            >
                <LogoConfused />
            </div>
            <div class="p-5">
                <h2
                    class="pb-1 text-3xl font-semibold text-black group-hover:text-sky-700"
                >
                    No Post Available
                </h2>

                <div
                    class="flex items-center pt-2 group-hover:underline text-sky-700"
                >
                    <p>Back To Home</p>
                    <LogoArrow />
                </div>
            </div>
        </NuxtLink>
    </article>
</template>
