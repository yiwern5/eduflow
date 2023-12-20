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
              html
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

export const enrollCourse=async(courseId, userEmail)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`", course: {connect: {id: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `

  const result=await request(MASTER_URL,mutationQuery);
  return result;
}

export const getUserEnrolledCourse=async(courseId, userEmail)=>{
  const query=gql`
  query GetUserEnrolledCourse {
    userEnrolledCourses(where: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) {
      id
      completedChapter {
        chapterId
      }
    }
  }
  `

  const result=await request(MASTER_URL,query);
  return result;
}

export const MarkChapterCompleted=async(chapterId, recordId, userEmail, coin)=>{
  const query=gql`
  mutation markChapterCompleted {
    updateUserEnrolledCourse(
      data: {completedChapter: {create: {data: {chapterId: "`+chapterId+`"}}}}
      where: {id: "`+recordId+`"}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection {
      edges {
        node {
          id
        }
      }
    }

    updateUserDetail(data: {coin: `+coin+`}, where: {email: "`+userEmail+`"}) {
      coin
    }
    publishUserDetail(where: {email: "`+userEmail+`"}) {
      id
    }
  }
  `

  const result=await request(MASTER_URL,query);
  return result;
}

export const createNewUser=async(userName, email, pfpUrl)=>{
  const query=gql`
  mutation MyMutation {
    upsertUserDetail(
      upsert: {create: {
        email: "`+email+`", 
        pfp: "`+pfpUrl+`", 
        coin: 10, 
        userName: "`+userName+`"}, 
        update: {email: "`+email+`", 
        pfp: "`+pfpUrl+`", 
        userName: "`+userName+`"}}
      where: {email: "`+email+`"}
    ) {
      id
    }
    publishUserDetail(where: {email: "`+email+`"}) {
      id
    }
  }
  `

  const result=await request(MASTER_URL,query);
  return result;
}

export const getUserDetail=async(email)=>{
  const query=gql`
  query getUserDetail {
    userDetail(where: {email: "`+email+`"}) {
      coin
    }
  }
  `

  const result=await request(MASTER_URL,query);
  return result;
}

export const GetAllUsers=async()=>{
  const query=gql`
  query getAllUsers {
    userDetails(orderBy: coin_DESC) {
      id
      pfp
      userName
      coin
    }
  }  
  `

  const result=await request(MASTER_URL,query);
  return result;
}