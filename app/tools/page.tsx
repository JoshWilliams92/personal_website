import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tools',
  description: 'Software I use, gadgets I love and other things I recommend.',
}

export default function Tools() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I'm being productive when I'm really just procrastinating. Here's a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <div>
            <Tool title="Microsoft Surface Laptop (7th Edition) | Snapdragon® X Elite | 16GB RAM">
              I've moved over to the new ARM-based Surface and it's a total shift in how I work. The efficiency is incredible—even when I'm pushing through heavy tasks, it stays silent and cool. It's the first Windows machine I've used that feels as responsive as a tablet but handles my full professional workflow.
            </Tool>
            <Button href="https://www.amazon.co.uk/dp/B0D1YQPVF6?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank" variant="secondary" className="mt-3">Find on Amazon</Button>
          </div>
          <div>
            <Tool title="2 x 24&quot; Samsung Full HD Monitor">
              A solid 1920x1080 display that gets the job done without the premium price tag. Perfect for multi-monitor setups.
            </Tool>
            <Button href="https://www.amazon.co.uk/dp/B09PNQ8W2N?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank" variant="secondary" className="mt-3">Find on Amazon</Button>
          </div>
          <div>
            <Tool title="BONTEC Dual Monitor Arm Desk Mount">
              Full motion adjustable mounting solution for dual monitors. The 360° rotation and height adjustment make it perfect for any desk setup.
            </Tool>
            <Button href="https://www.amazon.co.uk/dp/B01MR397OH?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank" variant="secondary" className="mt-3">Find on Amazon</Button>
          </div>
          <div>
            <Tool title="Blisswood 8 Point Massage Office Chair">
              Adjustable massage office chair with reclining back and footrest. The built-in massage and heating functions help reduce fatigue during long work sessions.
            </Tool>
            <Button href="https://www.amazon.co.uk/dp/B0CJRNZ3VY?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1" target="_blank" variant="secondary" className="mt-3">Find on Amazon</Button>
          </div>
        </ToolsSection>
        <ToolsSection title="Development and AI tools">
          <Tool title="VS Code">
            VS Code is the gold standard for code editing. The combination of speed, extensibility and a thriving ecosystem of extensions makes it the perfect environment for modern development. With integrated terminals, built-in Git support and seamless debugging, everything I need is right there without context switching.
          </Tool>
          <Tool title="GitHub Copilot">
            I use GitHub Copilot in VS Code with access to Anthropic and OpenAI models. Being able to toggle models to match specific tasks, combined with managed context that keeps responses snappy and maintains a more responsive experience for day-to-day coding, beats being locked into a single ecosystem's terminal-based approach or dealing with pay-as-you-go token costs.
          </Tool>
          <Tool title="Hugging Face">
            Hugging Face is my go-to for exploring and deploying a wide range of AI models. The platform's extensive model hub, user-friendly interface and seamless integration with popular frameworks make it an essential tool for both experimentation and production.
          </Tool>
          <Tool title="Lovable">
            An incredible online platform for spinning up prototypes at lightning speed. Rather than starting from scratch, I can describe what I want and Loveable generates a working prototype instantly. It's become my go-to for validating ideas before committing to full development.
          </Tool>
          <Tool title="AI SDK (Vercel)">
            A unified TypeScript SDK for building AI apps with modern streaming, fallbacks and multi-model support. AI SDK lets me implement custom AI workflows directly in code, giving me complete control over how I integrate AI into my frameworks and agents. The universal AI layer abstraction means I can build once and support multiple models seamlessly.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Frameworks">
          <Tool title="Next.js">
            A powerful React framework for building server-side rendered and statically generated web applications. Next.js provides a seamless dev experience with features like API routes, image optimization and built-in CSS, making it my go-to choice for modern web development.
          </Tool>
          <Tool title="Tailwind CSS">
            Pure utility-first CSS beats heavy design frameworks every time. Tailwind lets me build beautiful interfaces directly in the markup without fighting against abstraction layers or predetermined component constraints. The developer experience is incredible—I can iterate on designs in real-time without context switching between design tools and code. It's become my go-to for everything from rapid prototyping to production applications.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
