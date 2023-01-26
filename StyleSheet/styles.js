import { StyleSheet } from "react-native"
export const fontFamily = {
    Prompt: 'Prompt_300Light',
    Prompt_bold: 'Prompt_500Medium',
    Inter_bold: 'Inter_700Bold'
}
export const styles = StyleSheet.create(
    {
        h1: {

            fontFamily: fontFamily.Prompt_bold,
            fontSize: 28,
            paddingVertical: 7.5,
            fontWeight: '600',

        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',

        },

    })