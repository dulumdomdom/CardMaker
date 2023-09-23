type Block = {
    id: string,
    width: number,
    height: number
}

type TextElement = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: boolean
}

type TextBlock = Block & {
    type: 'text',
    content: Array<TextElement>
}

type ImageBlock = Block & {
    type: 'image',
    data: string,
    width: number,
    height: number
}

type ArtObjectBlock = Block & {
    type: 'artObject',
    data: string,
    width: number,
    height: number
}

type Filter = {
    name: string,
    color: string
}

type Template = {
    design: string
}

type Command = {
    name: string
}

type HistoryBlock = {
    history: Array<Command>
}

type Canvas = {
    width: string,
    height: string,
    elements: Array<TextBlock | ImageBlock | ArtObjectBlock>
}

type Export = {
    canvas: Array<Canvas>
}