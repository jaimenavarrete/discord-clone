package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/jaimenavarrete/discord-clone/pkg/shutdown"
	"github.com/julienschmidt/httprouter"
)

func main() {
	// setup exit code for graceful shutdown
	var ec int

	defer func() {
		os.Exit(ec)
	}()

	err := run()

	if err != nil {
		fmt.Println("an error has occured: ", err)
		ec = 1
		return
	}

	// apply graceful shutdown
	shutdown.Gracefully()
}

func run() error {
	port := "3001"

	router := httprouter.New()

	go func() {
		fmt.Println("Listening on port " + port)
		http.ListenAndServe(":"+port, router)
	}()

	return nil
}
