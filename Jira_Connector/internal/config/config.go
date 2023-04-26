package config

import (
	"github.com/ilyakaznacheev/cleanenv"
	"log"
)

var Instance Config

func init() {
	Instance = Config{}

	err := cleanenv.ReadConfig("config.yml", &Instance)
	if err != nil {
		log.Fatal(err)
	}
}

type Config struct {
	ConnectorSettings ConnectorSettings `yaml:"ConnectorSettings"`
	DataBaseSettings  DataBaseSettings  `yaml:"DataBaseSettings"`
}

type ConnectorSettings struct {
	Host    string `yaml:"host"`
	Port    string `yaml:"port"`
	JiraURL string `yaml:"jiraURL"`
}

type DataBaseSettings struct {
}
