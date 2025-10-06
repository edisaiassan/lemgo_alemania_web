import { Extend } from "../../global/components/Extend"
import TextFormField from "../../global/components/TextFormField"
import { Icon } from "../../global/components/Icon"
import { clear, search } from "../../global/constants/icons"
import { TopBar } from "../../global/components/TopBar"
import IconButton, { IconButtonType } from "../../global/components/buttons/IconButton"
import { quickQueryViewModel } from "./viewModel/quickQueryViewModel"
import MainButton, { MainButtonType } from "../../global/components/buttons/MainButton"

export const QuickQueryPage = () => {
  const quickQueryVM = quickQueryViewModel()

  const student = 'Alumno'
  const boss = 'Apoderado'

  const {
    searchText,
    onChangeSearchText,
    onClearSearchText,
    onSearch,
    selectValue,
    onSelect,
  } = quickQueryVM

  return (
    <>
      <TopBar title={<h3>Consulta Rápida</h3>} />
      <Extend className='gap-2 flex flex-col p-4'>
        <form onSubmit={(e) => {
          e.preventDefault()
          onSearch()
        }}>
          <Extend min={true} className='flex flex-col gap-2'>
            <TextFormField
              labelText='Alumnos y apoderados por DNI'
              name='search'
              value={searchText}
              leftIcon={<Icon path={search} />}
              onChange={(e) => onChangeSearchText(e)}
              rightIcon={
                searchText.length != 0 && (
                  <div className='flex gap-2'>
                    <IconButton
                      onPress={onClearSearchText}
                      path={clear}
                      type={IconButtonType.simple}
                    />
                    <IconButton
                      path={search}
                      onPress={onSearch}
                    />
                  </div>)
              }
            />
            <div className='flex gap-2 justify-end'>
              <MainButton
                onClick={() => onSelect(student)}
                type={selectValue === student ? MainButtonType.main : MainButtonType.glass}
              >{student}</MainButton>
              <MainButton
                onClick={() => onSelect(boss)}
                type={selectValue === boss ? MainButtonType.main : MainButtonType.glass}
              >{boss}</MainButton>
            </div>  
          </Extend>
        </form>
      </Extend>
    </>
  )
}
