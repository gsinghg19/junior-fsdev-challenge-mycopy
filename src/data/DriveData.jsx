
/*
 * This function should go to Google Drive,
 * pulls out any files in the user's My Drive
 * which are of type "Google Sheet" and
 * then adds them to an array
 */ 

const icons = {
    sheets: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png',
    docs: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png'
}
export const data = [
    {
        name: "File 1",
        mimeType: "Google Sheet",
        icon: icons.sheets,
        parentFolder: {
            id: "0123456789",
            name: "My Drive"
        },
        owner: "jmcmurdo@netpremacy.com",
        id: "12345",
        createdDate: '2023-02-02',
        lastModifiedDate: '2023-03-14',
        sharing: {
            viewers: 0,
            editors: 3
        }
    },
    {
        name: "File 2",
        mimeType: "Google Sheet",
        icon: icons.sheets,
        parentFolder: {
            id: "0123456789",
            name: "My Drive"
        },
        owner: "jmcmurdo@netpremacy.com",
        id: "12367",
        createdDate: '2023-02-02',
        lastModifiedDate: '2023-03-14',
        sharing: {
            viewers: 2,
            editors: 0
        }
    },
    {
        name: "File 3",
        mimeType: "Google Sheet",
        icon: icons.sheets,
        parentFolder: {
            id: "64646464",
            name: "Subfolderrrr"
        },
        owner: "jmcmurdo@netpremacy.com",
        id: "12389",
        createdDate: '2023-02-02',
        lastModifiedDate: '2023-03-14',
        sharing: {
            viewers: 2,
            editors: 3
        }
    }
]

export default {
    data,
}