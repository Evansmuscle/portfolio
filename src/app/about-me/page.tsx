"use client";

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col p-16 items-start justify-center flex-[2.5]">
        <h2 className="mb-4 text-3xl text-primary">ABOUT ME!</h2>
        <p className="mb-6 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          aperiam ex. Vitae consectetur quaerat exercitationem vel molestias,
          praesentium rem a obcaecati doloribus hic aspernatur accusamus
          officiis iste earum excepturi dolorum quia? Sint, maiores dolores qui
          amet et hic tempora unde iste ratione neque, nesciunt repellat vel
          consectetur alias temporibus laudantium illum mollitia tenetur totam
          nemo doloremque facere autem! Eius voluptatibus harum, quia molestias
          necessitatibus tempore ipsa nesciunt dicta itaque consequatur
          asperiores atque consectetur sapiente illum?
        </p>
        <a
          href="#"
          className="flex items-center justify-center text-primary text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2"
          >
            <mask
              id="mask0_25_95"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_25_95)">
              <path
                d="M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6ZM12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16Z"
                fill="#50C8E2"
              />
            </g>
          </svg>
          RESUME HERE
        </a>
      </div>
      <div className="flex flex-[1.5] rounded-3xl bg-primary w-full h-1/2 translate-x-1/4" />
    </div>
  );
};

export default About;
