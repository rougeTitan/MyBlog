// Import all blog posts
import * as awsCertGuide from "./aws-certified-cloud-practitioner-guide"
import * as awsAiCertGuide from "./aws-certified-ai-practitioner-guide"

import * as virtualAiRecruiter from "./virtual-ai-recruiter-problem"
import * as nextjsScalable from "./building-scalable-nextjs-apps"
import * as trunkBasedDevelopment from "./trunk-based-development"

export const allBlogPosts = [
  virtualAiRecruiter.blogPost,
  awsAiCertGuide.blogPost,
  awsCertGuide.blogPost,
  nextjsScalable.blogPost,
  trunkBasedDevelopment.blogPost,
]

export const getBlogPostContent = (slug: string) => {
  switch (slug) {
    case "virtual-ai-recruiter-problem":
      return virtualAiRecruiter.content
    case "aws-certified-cloud-practitioner-guide":
      return awsCertGuide.content
    case "aws-certified-ai-practitioner-guide":
      return awsAiCertGuide.content
    case "building-scalable-nextjs-apps":
      return nextjsScalable.content
    case "trunk-based-development":
      return trunkBasedDevelopment.content
    default:
      return null
  }
}

export const getBlogPostMeta = (slug: string) => {
  return allBlogPosts.find((post) => post.slug === slug)
}
