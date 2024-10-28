import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Our Projects</h2>
      <div className="h-1 w-1/4 bg-gray-300 mx-auto mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Project 1 */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/project1.png" // Replace with your image path
            alt="Project 1"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Messanger Clone</h3>
            <p className="text-gray-700 mb-4">
            Clone de Messenger en temps réel : Next.js 13, React, Tailwind,Prisma, MongoDB, NextAuth, Pusher
            </p>
            <Button className="w-full" asChild>
                <Link target='_blank' href="https://github.com/Ismail2830/messanger-clone?tab=readme-ov-file#readme">
                    Vérifier le code source
                </Link>
            </Button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/project2.png" // Replace with your image path
            alt="Project 2"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Système de gestion de l'apprentissage</h3>
            <p className="text-gray-700 mb-4">
                Développement d'une plateforme responsive pour le système de
                gestion de l'apprentissage avec Next.js 13, TypeScript, MySQL, Stripe,
                Prisma, Tailwind CSS.
            </p>
            <Button className="w-full" asChild>
                <Link target='_blank' href="https://github.com/Ismail2830/lms-platform">
                    Vérifier le code source
                </Link>
            </Button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/project3.png" // Replace with your image path
            alt="Project 3"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">l'authentification avec NextJS</h3>
            <p className="text-gray-700 mb-4">
                l'authentification avancée à votre application NextJS.
            </p>
            <Button className="w-full" asChild>
                <Link target='_blank' href="https://github.com/Ismail2830/Next-auth">
                    Vérifier le code source
                </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects