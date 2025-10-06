import { useState } from "react"

export const signInViewModel = () => {
    const [searchText, setSearchText] = useState('sapee')

    const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const onClearSearchText = () => {
        if (searchText.length != 0) {
            setSearchText('')
        }
    }

    const onSearch = (text: string) => {
        if (text.length != 0) {
        }
    }

    return {
        searchText, setSearchText,
        onChangeSearchText,
        onClearSearchText,
        onSearch,
    }
}