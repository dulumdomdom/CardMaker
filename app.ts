type Char = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: string
}

type Block = {
    id: string,
    width: number,
    height: number
}

type TextBlock = Block & {
    type: 'text',
    chars: Array<Char>
}

type ImageBlock = Block & {
    type: 'image',
    data: string
}

type GraphicObject = Block & {
    type: 'graphic',
    data: object
}

type Page = Array<TextBlock|ImageBlock|GraphicObject>

type Doc = {
    pages: Array<Page>
}

type Filter = {
    name: string,
    FilterColor: string
}

type Command = Block & {
    name: string
}

type HistoryBlock = Block & {
    history: Array<Command>
}

type Template = {
    design: string
}

const textBlock: TextBlock = {
    id: 'id1',
    type: 'text',
    chars: [{
        value: 'h',
        fontSize: 12,
        fontFamily: 'Arial',
        color: '#ff00ff',
        bold: true
    }]
}

const imageBlock: ImageBlock = {
    id: 'id2',
    type: 'image',
    data: 'https://'
}

const graphicBlock: GraphicObject = {
    id: 'id3',
    type: 'graphic',
    data: {}
}

const doc: Doc = {
    pages: [
        [textBlock, imageBlock, graphicBlock]
    ]
}