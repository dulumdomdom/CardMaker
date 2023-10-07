type Block = {
    id: string,
    widthBlock: number,
    heightBlock: number
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
    data: string
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
    design: string //...
}

type Command = {
    name: string
}

type HistoryBlock = {
    history: Array<Command> // do redo
}

type Canvas = {
    width: string,
    height: string,
    elements: Array<TextBlock | ImageBlock | ArtObjectBlock>
}

type Export = {
    canvas: Array<Canvas>
}

// Константы с данными
const blockMinimal = {
    id: "",
    widthBlock: 0,
    heightBlock: 0
  };
  
    const textElementMinimal = {
    value: "",
    fontSize: 0,
    fontFamily: "",
    color: "",
    bold: false
    };

    const textBlockMinimal = {
    id: "",
    widthBlock: 0,
    heightBlock: 0,
    type: 'text',
    content: []
    };

    const imageBlockMinimal = {
    id: "",
    widthBlock: 0,
    heightBlock: 0,
    type: 'image',
    data: ""
    };

    const artObjectBlockMinimal = {
    id: "",
    widthBlock: 0,
    heightBlock: 0,
    type: 'artObject',
    data: "",
    width: 0,
    height: 0
    };

    const filterMinimal = {
    name: "",
    color: ""
    };

    const templateMinimal = {
    design: ""
    };

    const commandMinimal = {
    name: ""
    };

    const historyBlockMinimal = {
    history: []
    };

    const canvasMinimal = {
    width: "",
    height: "",
    elements: []
    };

    const exportMinimal = {
    canvas: []
    };
    const blockMedium = {
        id: "block1",
        widthBlock: 100,
        heightBlock: 50
      };
      
      const textElementMedium = {
        value: "Пример текста",
        fontSize: 12,
        fontFamily: "Arial",
        color: "#000000",
        bold: false
      };
      
      const textBlockMedium = {
        id: "text1",
        widthBlock: 200,
        heightBlock: 100,
        type: 'text',
        content: [
          { value: "Текст 1", fontSize: 16, fontFamily: "Arial", color: "#000000", bold: true },
          { value: "Текст 2", fontSize: 14, fontFamily: "Helvetica", color: "#FF0000", bold: false }
        ]
      };
      
      const imageBlockMedium = {
        id: "image1",
        widthBlock: 300,
        heightBlock: 200,
        type: 'image',
        data: "base64-encoded-image-data"
      };
      
      const artObjectBlockMedium = {
        id: "art1",
        widthBlock: 400,
        heightBlock: 300,
        type: 'artObject',
        data: "base64-encoded-art-data",
        width: 200,
        height: 150
      };
      
      const filterMedium = {
        name: "Фильтр 1",
        color: "#00FF00"
      };
      
      const templateMedium = {
        design: "Шаблон дизайна"
      };
      
      const commandMedium = {
        name: "Команда 1"
      };
      
      const historyBlockMedium = {
        history: [{ name: "Команда 1" }, { name: "Команда 2" }]
      };
      
      const canvasMedium = {
        width: "800px",
        height: "600px",
        elements: [textBlockMedium, imageBlockMedium]
      };
      
      const exportMedium = {
        canvas: [canvasMedium]
      };
      const blockFull = {
        id: "block1",
        widthBlock: 100,
        heightBlock: 50
      };
      
      const textElementFull = {
        value: "Пример текста",
        fontSize: 18,
        fontFamily: "Helvetica",
        color: "#FF0000",
        bold: true
      };
      
      // Примеры максимальных данных для TextBlock, ImageBlock, ArtObjectBlock
      const textBlockFull = {
        id: "text1",
        widthBlock: 200,
        heightBlock: 100,
        type: 'text',
        content: [
          { value: "Текст 1", fontSize: 16, fontFamily: "Arial", color: "#000000", bold: true },
          { value: "Текст 2", fontSize: 14, fontFamily: "Helvetica", color: "#FF0000", bold: false }
        ]
      };
      
      // Примеры максимальных данных для TextBlock, ImageBlock, ArtObjectBlock
      const imageBlockFull = {
        id: "image1",
        widthBlock: 300,
        heightBlock: 200,
        type: 'image',
        data: "base64-encoded-image-data"
      };
      
      // Примеры максимальных данных для TextBlock, ImageBlock, ArtObjectBlock
      const artObjectBlockFull = {
        id: "art1",
        widthBlock: 400,
        heightBlock: 300,
        type: 'artObject',
        data: "base64-encoded-art-data",
        width: 200,
        height: 150
      };
      
      const filterFull = {
        name: "Фильтр 1",
        color: "#00FF00"
      };
      
      const templateFull = {
        design: "Шаблон дизайна"
      };
      
      const commandFull = {
        name: "Команда 1"
      };
      
      // Примеры максимальных данных для HistoryBlock
      const historyBlockFull = {
        history: [{ name: "Команда 1" }, { name: "Команда 2" }]
      };
      
      // Примеры максимальных данных для Canvas
      const canvasFull = {
        width: "1200px",
        height: "900px",
        elements: [textBlockFull, imageBlockFull, artObjectBlockFull]
      };
      
      // Пример максимальных данных для Export
      const exportFull = {
        canvas: [canvasFull, canvasFull]
      };
            