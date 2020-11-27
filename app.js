console.log(process.env.ENV);

if (process.env.ENV === "dev") {
    console.log("Hello dev");
} else if (process.env.ENV === "prod") {
    console.log("Hello prod");
}