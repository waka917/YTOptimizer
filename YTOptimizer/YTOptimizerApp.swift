//
//  YTOptimizerApp.swift
//  YTOptimizer
//
//  Created by Ryusei on 2024/05/07.
//

import SwiftUI

@main
struct YTOptimizerApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .frame(
                    minWidth: 640, maxWidth: 640,
                    minHeight: 425, maxHeight: 425)
        }
        .windowResizability(.contentSize)
        .defaultSize(CGSize(width: 640, height: 425))
    }
}
