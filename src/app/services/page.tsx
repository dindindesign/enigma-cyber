import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CloudIcon,
  Cog8ToothIcon,
  InformationCircleIcon,
  LightBulbIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Consulting & Advisory",
    description:
      "Our consulting and advisory services are centered around the management elements of cybersecurity, such as planning, policy formulation, performance tracking, continual improvement, and information risk management.",
    href: "#",
    icon: InformationCircleIcon,
  },
  {
    name: "Engineering & Operations",
    description:
      "Our engineering and operations service pillar focuses on both the technological and operational aspects of cybersecurity. Our services include technology implementation, optimization, management, and monitoring.",
    href: "#",
    icon: Cog8ToothIcon,
  },
  {
    name: "Exposure Management",
    description:
      "Our exposure management service focuses on identifying all potential weak spots in your applications and their underlying infrastructure. This comprehensive service includes web app penetration testing, technical assessments, and remediation services.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Product Ideation & Validation",
    description:
      "We help startups and enterprises ideate, design, and validate their cybersecurity products and services, focusing on meeting the unique requirements of their intended audience. Our services focus exclusively on ideation, design, and validation and do not encompass cybersecurity software development.",
    href: "#",
    icon: RocketLaunchIcon,
  },
  {
    name: "Cloud Incident Response",
    description:
      "Our incident response service specializes in resolving incidents within cloud environments, encompassing SaaS, PaaS, and IaaS. We provide both on-demand incident response services and incident response retainers, differentiating ourselves from other providers by focusing solely on cloud-related incidents.",
    href: "#",
    icon: CloudIcon,
  },
  {
    name: "Threat Intelligence",
    description:
      "At our company, we have our own cybersecurity threat intelligence platform called Venari, which provides detailed information on over 5,000 security incidents worldwide. Our platform constantly monitors more than 88 threat groups and is updated in near real-time with the latest information on new cyberattacks and data breaches.",
    href: "#",
    icon: LightBulbIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-400">
            Secure quickly, grow faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to protect your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A comprehensive suite of cybersecurity services to unleash your
            business full security potential.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-emerald-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-emerald-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
