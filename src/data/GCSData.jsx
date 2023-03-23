
/*
 * This function should go to a GCS bucket,
 * pulls out all objects
 * then adds them to an array
 */

export const data = [
    {
        name: "Object 1",
        size: 5000,
        bucket: "my_bucket",
        sotrageClass: "STANDARD",
        id: "12345"
    },
    {
        name: "Object 2",
        size: 5000,
        bucket: "my_bucket",
        sotrageClass: "STANDARD",
        id: "12367"
    },
    {
        name: "Object 3",
        size: 5000,
        bucket: "my_bucket",
        sotrageClass: "NEARLINE",
        id: "abcde"
    }
]

export default {
    data,
}