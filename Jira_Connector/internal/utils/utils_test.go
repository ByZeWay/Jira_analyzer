package utils

import (
	"Jira_Connector/internal/jsonModels"
	"testing"
)

func TestSearchProjects(t *testing.T) {
	testTable := []struct {
		name        string
		projects    []jsonModels.Project
		searchParam string
		expectedRes []jsonModels.Project
	}{
		{
			name: "empty searchParam",
			projects: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
			searchParam: "",
			expectedRes: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
		},
		{
			name: "matching searchParam",
			projects: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
			searchParam: "KEY",
			expectedRes: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
		},
		{
			name: "no matching searchParam",
			projects: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
			searchParam: "NO_MATCH",
			expectedRes: []jsonModels.Project{},
		},
		{
			name: "matching searchParam with different case",
			projects: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
			searchParam: "kEY",
			expectedRes: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
		},
		{
			name: "matching searchParam by name",
			projects: []jsonModels.Project{
				{Key: "KEY1", Name: "name1"},
				{Key: "KEY2", Name: "name2"},
				{Key: "KEY3", Name: "name3"},
			},
			searchParam: "name2",
			expectedRes: []jsonModels.Project{
				{Key: "KEY2", Name: "name2"},
			},
		},
	}

	for _, tt := range testTable {
		t.Run(tt.name, func(t *testing.T) {
			res := SearchProjects(tt.projects, tt.searchParam)

			if len(res) != len(tt.expectedRes) {
				t.Errorf("expected result length %d, but got %d", len(tt.expectedRes), len(res))
			}

			for i := range res {
				if res[i].Key != tt.expectedRes[i].Key || res[i].Name != tt.expectedRes[i].Name {
					t.Errorf("expected result %v, but got %v", tt.expectedRes[i], res[i])
				}
			}
		})
	}
}
