import { useQuery } from 'react-query'
import axios from 'axios'
import React from 'react'
import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const fetchPosts = async () => {
    try {
        const { data } = await axios.get("https://gorest.co.in/public/v2/posts")
        return (data)
    } catch (error) {
        throw error("unable to post data")
    }
}

const Home = () => {
    const { data, isLoading, error } = useQuery("posts", fetchPosts)
    console.log(data)
    return (
        <>
            <Container maxW="1300px" mt="4">
                {data.data.map ((post)=> {
                    <Stack 
                    p="4" 
                    boxShadow="md" 
                    borderRadius="xl" 
                    border="1px solid #ccc" 
                    
                    >
                        <Flex justifyContent="space-between">
                            <Text>UserId: {post.user_id}</Text>
                            <Text>PostId: {id}</Text>
                        </Flex>
                        <Heading>Title</Heading>
                        <Text>Content</Text>
                    </Stack>
                })}
            </Container>

        </>
    )
}

export default Home