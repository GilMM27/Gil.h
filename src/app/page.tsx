import { api } from "~/trpc/server";
import Navbar from "./_components/navbar";
import Image from "next/image";
import Terminal from "./_components/terminal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./_components/shadcn/card";
import Carousels from "./_components/carousels";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./_components/shadcn/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./_components/shadcn/dropdown-menu";
import Footer from "./_components/footer";

export default async function Home() {
  const experiences = await api.experience.getExperiencesByType({
    experienceType: "workExperience",
    isPrimary: true,
  });
  const competitions = await api.experience.getExperiencesByType({
    experienceType: "competition",
    isPrimary: true,
  });
  const aboutMe = await api.aboutMe.getAboutMe({});
  return (
    <main id="Gil.h">
      <Navbar />
      <div className="m-10 flex bg-gradient-to-l from-green-950 to-black">
        <section className="relative hidden h-96 w-96 overflow-hidden lg:block">
          <Image
            src={"/assets/yo.jpg"}
            width={918}
            height={1032}
            alt="Image"
            className="absolute h-full w-full object-contain"
          />
        </section>
        <section className="flex items-center text-green-700 lg:ml-10">
          <div>
            <div className="text-3xl lg:text-5xl">Who is:</div>
            <div className="text-5xl lg:text-9xl">Gilberto Malagamba?</div>
          </div>
        </section>
      </div>

      <Terminal />

      <Card className="mx-10 mt-14 rounded-xl border-0 bg-neutral-900 p-3 text-white lg:mx-28 lg:mt-28">
        <CardHeader className="text-2xl text-green-400 lg:text-3xl">
          {aboutMe?.title}
        </CardHeader>
        <CardContent className="text-lg lg:text-xl">
          {aboutMe?.content.map((line, index) => (
            <div key={index}>&gt; {line}</div>
          ))}
        </CardContent>
      </Card>

      <Carousels />

      <div className="h-0 lg:h-14" id="Experience"></div>
      <div className="mt-14 w-full text-center text-3xl text-green-700 lg:text-5xl">
        Experience
      </div>
      {experiences.length > 0 ? (
        <section className="mx-10 mt-10 justify-center rounded-xl bg-neutral-900 lg:mx-28">
          <Tabs defaultValue={experiences[0]?.id.toString()}>
            <TabsList className="w-full bg-neutral-900">
              <div className="hidden w-full lg:flex lg:justify-evenly">
                {experiences.map((experience) => (
                  <TabsTrigger
                    key={experience.id}
                    value={experience.id.toString()}
                    className="w-full"
                  >
                    {experience.title}
                  </TabsTrigger>
                ))}
              </div>
              <div className="block lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="text-white">Options</div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {experiences.map((experience) => (
                      <DropdownMenuItem key={experience.id}>
                        <TabsTrigger
                          value={experience.id.toString()}
                          className="w-full text-lg"
                        >
                          {experience.title}
                        </TabsTrigger>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsList>
            {experiences.map((experience) => (
              <TabsContent key={experience.id} value={experience.id.toString()}>
                <Card className="flex flex-col border-0 bg-neutral-900 text-lg text-white md:grid md:h-[25rem] md:grid-cols-3">
                  <Image
                    src={experience.imageUrl}
                    width={918}
                    height={1032}
                    alt={experience.title}
                    className="mb-10 max-h-2/3 w-3/4 self-center rounded-xl object-cover md:col-span-1 md:mb-0 md:justify-self-center"
                  />
                  <div className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-neutral-900 md:col-span-2 md:overflow-y-auto">
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-xl">
                        {experience.header}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-5 space-y-2">
                      {experience.description.map((line, index) => (
                        <div key={index}>&gt; {line}</div>
                      ))}
                    </CardContent>
                    <CardFooter className="flex flex-col">
                      {experience.linksName.map((linkName, index) => (
                        <a
                          key={index}
                          href={experience.link[index]}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-green-400"
                        >
                          {linkName}
                        </a>
                      ))}
                    </CardFooter>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      ) : (
        <div className="w-full p-5 text-center">Loading...</div>
      )}

      <div className="h-0 lg:h-14" id="Competitions"></div>
      <div className="mt-14 w-full text-center text-3xl text-green-700 lg:text-5xl">
        Competitions
      </div>
      <section className="mx-10 mt-10 justify-center rounded-xl lg:mx-28 lg:bg-neutral-900">
        {competitions.length > 0 ? (
          <Tabs defaultValue={competitions[0]?.id.toString()} className="flex">
            <TabsList className="w-full gap-3 bg-neutral-900 text-white lg:mt-6 lg:ml-6 lg:grid lg:h-fit lg:w-fit lg:grid-rows-5">
              {competitions.map((competition) => (
                <TabsTrigger
                  key={competition.id}
                  value={competition.id.toString()}
                  className="hidden w-full lg:block"
                >
                  {competition.title}
                </TabsTrigger>
              ))}
              <div className="block w-full text-center lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>Options</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {competitions.map((competition) => (
                      <DropdownMenuItem key={competition.id}>
                        <TabsTrigger
                          value={competition.id.toString()}
                          className="w-full"
                        >
                          {competition.title}
                        </TabsTrigger>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TabsList>
            {competitions.map((competition) => (
              <TabsContent
                key={competition.id}
                value={competition.id.toString()}
              >
                <Card className="flex flex-col border-0 bg-neutral-900 text-lg text-white md:grid md:h-[25rem] md:grid-cols-3">
                  <div className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-neutral-900 md:col-span-2 md:overflow-y-auto">
                    <CardHeader>
                      <CardTitle className="text-3xl">
                        {competition.title}
                      </CardTitle>
                      <CardDescription className="text-xl">
                        {competition.header}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-5 space-y-2">
                      {competition.description.map((line, index) => (
                        <div key={index}>&gt; {line}</div>
                      ))}
                    </CardContent>
                    <CardFooter>
                      {competition.linksName.map((linkName, index) => (
                        <a
                          key={index}
                          href={competition.link[index]}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-green-400"
                        >
                          {linkName}
                        </a>
                      ))}
                    </CardFooter>
                  </div>
                  <Image
                    src={competition.imageUrl}
                    height={1000}
                    width={1000}
                    alt="Image from the competition"
                    className="mb-10 w-[90%] self-center rounded-xl object-cover md:col-span-1 md:mb-0 md:justify-self-center"
                  />
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="w-full p-5 text-center">Loading...</div>
        )}
      </section>

      <Footer />
    </main>
  );
}
