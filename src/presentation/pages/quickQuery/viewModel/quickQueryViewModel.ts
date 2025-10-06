import { ChangeEvent, useState } from "react"

export const quickQueryViewModel = () => {
    const [searchText, setSearchText] = useState('')
    const [selectValue, setSelectValue] = useState('Alumno')

    const onChangeSearchText = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const raw = e.target.value;
        const digitsOnly = raw.replace(/\D/g, '').slice(0, 8);
        setSearchText(digitsOnly);
    }

    const onClearSearchText = () => {
        if (searchText.length != 0) {
            setSearchText('')
        }
    }

    const onSearch = () => {
        if (searchText.length == 8 ) {
        }
    }

    const onSelect = (value: string) => {
        if (value != selectValue) {
            setSelectValue(value)
        }
    }

    return {
        searchText, setSearchText,
        selectValue, setSelectValue,
        onChangeSearchText,
        onClearSearchText,
        onSearch,
        onSelect,
    }
}