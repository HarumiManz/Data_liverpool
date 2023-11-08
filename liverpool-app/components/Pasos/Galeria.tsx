import Image from "next/image";

export default function Galeria() {
  return (
    <>
      <div className="p-20 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img3.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img1.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img2.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img4.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img5.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img6.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img7.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img8.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/images/img3.png"
              alt="analitica "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
