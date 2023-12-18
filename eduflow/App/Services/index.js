import { request, gql } from 'graphql-request';
const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clq9dhmqaebcd01umczkm8pz5/master";

export const getCourseList=async(level)=>{
    const query=gql`
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          price
          level
          tags
          duration
          author
          banner {
            url
          }
          chapters {
            id
            title
            content {
              markdown
            }
            result {
              url
            }
          }
          description {
            markdown
          }
        }
      }
      `

      const result=await request(MASTER_URL,query);
      return result;
}