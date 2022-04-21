import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { Switch, Route } from "react-router-dom"
import Home from './home/Home'
import { ReactQueryDevtools } from 'react-query/devtools'



const queryClient = new QueryClient()


const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App