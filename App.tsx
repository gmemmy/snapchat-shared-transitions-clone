import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { SnapchatRoutes } from './Model'
import Story from './Story'
import Snapchat from './Snapchat'

const Stack = createSharedElementStackNavigator <SnapchatRoutes>()

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      <Stack.Screen name="Snapchat" component={Snapchat}/>
      <Stack.Screen name="Story" component={Story} sharedElements={(route) => {
        return [route.params.story.id]
      }} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigator