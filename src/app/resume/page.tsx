import Image from "next/image";
function resume() {
  return (
    <>
      <section className="p-10 ">
        <div className="flex items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center px-5">
            <div>ANAWAT MONPRACHAK</div>
            <div>ELECTRONIC & COMPUTER SYSTEM</div>
            <div>SLIPAKORN UNIVERSITY</div>
          </div>
          <div className="w-auto flex flex-col items-center justify-center">
            <Image
              src="/images/my-pic.jpg"
              alt="my-pic"
              className="block rounded-full objec-cover"
              width={100}
              height={24}
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-auto">
            SideBar
            <div>Contect</div>
            <div>57 village No.13 Srisumran Songpinong Suphanburi 72110</div>
            <div>0867653546</div>
            <div>anawat.mon@gmail.com</div>
            <br />
            <div>Skill</div>
            <div>C# </div>
            <div>Database MySql</div>
            <div>Java Script</div>
            <div>Python</div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div>Experience</div>
            <div>Furukawa Filtel</div>
            <div>Fujikura Electronic</div>
            <div>Kerry Express</div>
            <br />
            <div>Education</div>
            <div>Bachelor's Degree</div>
            <div>Silpakorn University</div>
            <div>Faculty of Engineering and Industral Technology</div>
            <div>Major Electronic and Computer System</div>
            <br />
            <div>High School</div>
            <div>Mattayomthanbin kampangsaen</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default resume;
