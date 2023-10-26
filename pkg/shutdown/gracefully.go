package shutdown

import (
	"os"
	"os/signal"
	"syscall"
)

func Gracefully() {
	q := make(chan os.Signal, 1)
	defer close(q)

	signal.Notify(q, syscall.SIGINT, syscall.SIGTERM)

	<-q
}
