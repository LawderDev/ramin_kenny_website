export const homeQuery =
    `query homeQuery {
      homeSection(id: 1) {
        data {
          attributes {
            author
            status
            quotation
            message
            more
          }
        }
      }
    }`

export const navBarQuery =
    `query navBarQuery {
      navigationBars {
        data {
          attributes {
            updatedAt,
            name
          }
        }
      }
    }`

export const skillQuery =
    `query skillsQuery {
      skillSections {
        data {
          attributes {
            title
            icon
            Skills {
              ... on ComponentSkillsSkills {
                language {
                  name
                }
                frameworksAndlibrary {
                  name
                }
                sgbd{
                  name
                }
                cms {
                  name
                }
                gameEngine {
                  name
                }
              }
            }
          }
        }
      }
    }`

export const projectQuery =
    `query projectsQuery {
      projectSection(id: 1) {
        data {
          attributes {
            title
            projects {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }`

export const aboutQuery =
    `query aboutQuery {
      aboutSection(id: 1) {
        data {
          attributes {
            title
            question
            welcoming
            profile {
              data {
                attributes {
                  url
                }
              }
            }
            presentation {
              ... on ComponentParagraphesParagraphes {
                id
                text
              }
            }
          }
        }
      }
    }`

export const contactQuery =
    `query contactQuery {
        contactSection(id: 1) {
            data {
                attributes {
                    title
                    name
                    email
                    message
                    sending
                    confirmationMessage
                }
            }
        }
    }`
