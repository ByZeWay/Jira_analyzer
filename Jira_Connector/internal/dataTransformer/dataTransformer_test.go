package dataTransformer

import (
	"Jira_Connector/internal/jsonModels"
	"reflect"
	"testing"
)

func TestProjectsInBytesToStruct(t *testing.T) {
	testTable := []struct {
		name        string
		bytes       []byte
		expected    []jsonModels.Project
		expectedErr bool
	}{
		{
			name:  "valid response",
			bytes: []byte(`[{"id":"1","key":"key1","name":"Project1","lead":{"name":"lead1"}},{"id":"2","key":"key2","name":"Project2","lead":{"name":"lead2"}}]`),
			expected: []jsonModels.Project{
				{
					ID:   "1",
					Key:  "key1",
					Name: "Project1",
					Lead: jsonModels.User{
						Name: "lead1",
					},
				},
				{
					ID:   "2",
					Key:  "key2",
					Name: "Project2",
					Lead: jsonModels.User{
						Name: "lead2",
					},
				},
			},
			expectedErr: false,
		},
		{
			name:        "invalid response",
			bytes:       []byte(`invalid json`),
			expected:    nil,
			expectedErr: true,
		},
	}

	for _, test := range testTable {
		t.Run(test.name, func(t *testing.T) {
			// Invoke ProjectsInBytesToStruct function
			projects, err := ProjectsInBytesToStruct(test.bytes)

			// Check if an error was expected and if it was actually returned
			if (err != nil) != test.expectedErr {
				t.Errorf("Expected error %v, but got %v", test.expectedErr, err)
			}

			// Check if the returned project data matches the expected data
			if !reflect.DeepEqual(projects, test.expected) {
				t.Errorf("Expected %v, but got %v", test.expected, projects)
			}
		})
	}
}
