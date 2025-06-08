import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { File, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Page() {
  return (
    <section className="prose px-4">
      <div className="flex flex-row items-center justify-start gap-8 mb-8">
        <div className="relative w-24 h-24 hidden md:block">
          <Image
            src="/images/profile.PNG"
            alt="Siyoon Lee"
            fill
            className="rounded-full object-cover aspect-square"
          />
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="relative w-24 h-24 block md:hidden">
            <Image
              src="/images/profile.PNG"
              alt="Siyoon Lee"
              fill
              className="rounded-full object-cover aspect-square"
            />
          </div>
          <h1 className="text-lg font-semibold tracking-tighter md:text-2xl">
            Siyoon Lee
          </h1>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Uijeongbu-si, South Korea
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +82-10-7217-3220
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button variant="outline" size="default">
                <Link href="mailto:shunrises@gmail.com">
                  <Mail className="w-2 h-2 mr-0.5" />
                  Email
                </Link>
              </Button>
              <Button variant="outline" size="default">
                <Link
                  href="https://www.linkedin.com/in/siyoon-lee"
                  target="_blank"
                >
                  <Linkedin className="w-2 h-2 mr-0.5" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="default">
                <Link href="https://github.com/shunrises" target="_blank">
                  <Github className="w-2 h-2 mr-0.5" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="default">
                <Link href="https://refresh.cv/siyoonleekr" target="_blank">
                  <File className="w-2 h-2 mr-0.5" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi, I'm Siyoon Lee, a product-minded software engineer with a
            hands-on, adaptive approach and 2+ years of industry experience. I'm
            passionate about building impactful products from 0 to 1 and known
            for quickly picking up new technologies like Flutter and Ruby on
            Rails to deliver production-level products.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            I led the development of a K-POP merch marketplace that reached
            30,000 users in 6 months and have experience in full-cycle
            development, user-centric design, and social media marketing. I
            enjoy bridging the gap between technical implementation and user
            needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In my free time, I enjoy working on side projects, contributing to
            open-source software, and exploring new technologies. I'm always
            happy to connect and collaborate on interesting projects.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="px-6 py-2">
              <h3 className="font-semibold text-gray-900 mb-3">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Dart</Badge>
                <Badge variant="secondary">Ruby</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-6 py-2">
              <h3 className="font-semibold text-gray-900 mb-3">
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">Ruby on Rails</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">AWS</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Recent Projects */}
      {/* <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Projects</h2>
          <Button variant="outline" asChild>
            <Link href="/portfolio">View All</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                K-pop Idol Preference Grid Generator
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Web application for generating K-POP idol preference grids with
                Next.js and Tailwind CSS
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Web App
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Choi-Ae(Bias) Market
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                K-POP merchandise resale mobile platform that achieved 30,000
                users within 6 months
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  Flutter
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Mobile App
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Marketplace
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Recent Blog Posts */}
      {/* <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Writing</h2>
          <Button variant="outline" asChild>
            <Link href="/blog">View All</Link>
          </Button>
        </div>
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Link
                      href="/blog/building-k-pop-marketplace"
                      className="hover:text-blue-600 transition-colors"
                    >
                      Building a K-POP Marketplace: Lessons from 0 to 30K Users
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    How I built and scaled a K-POP merchandise marketplace using
                    Flutter and effective marketing strategies.
                  </p>
                  <p className="text-gray-400 text-xs">December 15, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    <Link
                      href="/blog/flutter-to-nextjs-migration"
                      className="hover:text-blue-600 transition-colors"
                    >
                      From Flutter to Next.js: When and Why to Migrate
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    My experience rebuilding a Flutter web app with Next.js to
                    solve performance and SEO challenges.
                  </p>
                  <p className="text-gray-400 text-xs">November 28, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </section>
  );
}
