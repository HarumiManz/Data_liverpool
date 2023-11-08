import Image from "next/image";

export default function StoryTelling() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white">
              Story Telling
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="mt-4 w-full rounded-lg"
              src="/images/img7.png"
              alt="Logo tec "
              width={500}
              height={400}
            />
            <Image
              className="mt-4 w-full lg:mt-14 rounded-lg"
              src="/images/img8.png"
              alt="Logo tec "
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
}
